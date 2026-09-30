const { test } = require('node:test');
const assert = require('node:assert/strict');
const { stripTypeScriptTypes } = require('node:module');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Executa a classe real com um substituto de ActivatedRoute, sem renderizar Angular.
function content() {
    const source = fs.readFileSync(path.join(__dirname,
        '../angular-blog/src/app/pages/content/content.component.ts'), 'utf8')
        .replace(/^import .*;\s*$/gm, '')
        .replace(/@Component\(\{[\s\S]*?\}\)/, '')
        .replace('export class', 'class');
    const ctx = vm.createContext({ dataFake: [
        { id: '1', title: 'Um', description: 'Primeiro', photoCover: 'one.png' },
        { id: '2', title: 'Dois', description: 'Segundo', photoCover: 'two.png' }
    ] });
    vm.runInContext(stripTypeScriptTypes(source, { mode: 'transform' }) +
        '\nglobalThis.Content = ContentComponent;', ctx);
    let notify;
    let active = true;
    const route = { paramMap: { subscribe(callback) {
        notify = callback;
        return { unsubscribe() { active = false; } };
    } } };
    const component = new ctx.Content(route);
    component.ngOnInit();
    return { component, send(id) { if (active) notify({ get: () => id }); },
             active: () => active };
}

test('mesmo componente atualiza conteúdo ao mudar parâmetro', () => {
    const { component, send } = content();
    send('1'); assert.equal(component.contentTitle, 'Um');
    send('2'); assert.equal(component.contentTitle, 'Dois');
    assert.equal(component.photoCover, 'two.png');
});

test('artigo inexistente limpa dados anteriores e recupera com rota válida', () => {
    const { component, send } = content();
    send('1'); send('999');
    assert.equal(component.contentTitle, 'Artigo não encontrado');
    assert.equal(component.photoCover, '');
    send(null); assert.equal(component.photoCover, '');
    send('2'); assert.equal(component.contentDescription, 'Segundo');
});

test('destruição libera assinatura da rota', () => {
    const { component, send, active } = content();
    send('1'); component.ngOnDestroy(); send('2');
    assert.equal(active(), false);
    assert.equal(component.contentTitle, 'Um');
});
