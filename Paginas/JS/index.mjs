import puppeteer from './puppeteer';

var turma = 'info';
var ano = 1;


export function sla() {
(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto('https://sig.ifc.edu.br/sigaa/verTelaLogin.do');
    console.log('goto');

    // Set screen size.
    await page.setViewport({width: 1080, height: 800});
    console.log('viewport');


    var user = 'brunotochetto';
    // Type into search box.
    await page.waitForSelector('input[type="password"]');
    await page.type('input[type="text"]', user);
    console.log('usuario colocado');

    var senha = 'GatoZIN12!@';
    await page.type('input[type="password"]', senha);
    console.log('senha colocada');

    // Wait and click on first result.
    await page.click("tfoot input");
    console.log('clica');


    await page.waitForSelector('#form_acessarTurmaVirtualj_id_1');
    const quale = await page.locator('#agenda-docente > table > tbody > tr:nth-child(2) > td:nth-child(2)').waitHandle();
    const fullTitle = await quale.evaluate(el => el.outerHTML);
    // Print the full title.
    turma = 'info';
    if (fullTitle.includes('INTERNET')) {
        console.log('info');
        
    } else if (fullTitle.includes('ALIMENTOS')) {
        console.log('alimentos');
        turma = 'alimentos';
    } else if (fullTitle.includes('AGROPECUÁRIA'))
     {
        console.log('agro');
        turma = 'agro';    
    } else {
        console.log('n achado, vai ser Info');
    }

    
    const quale2 = await page.locator('#agenda-docente > table > tbody > tr:nth-child(6) > td:nth-child(2)').waitHandle();
    const fullTitle2 = await quale2.evaluate(el => el.outerHTML);
    if (fullTitle2.includes('24')) {
        ano = 1;
    } else if (fullTitle2.includes('23')) {
        ano = 2;
    } else if (fullTitle2.includes('22')) {
        ano = 3;
    }

    console.log(turma, ano)

    // await browser.close();
})();
}

sla();

export function turmaAno() {
    return 'info', 1;
}
