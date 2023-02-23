export let changeCssVaribles = theme => {
    let root = document.querySelector(':root');
    
// root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
//root.style.setProperty('--theme-default-image', `var(--theme-${theme}-image)`);

    let cssVaribles = ['header', 'image'];
    cssVaribles.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`, 
            `var(--theme-${theme}-${element})`
        );
    })
}