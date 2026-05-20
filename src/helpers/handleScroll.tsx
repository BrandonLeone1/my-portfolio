export default function handleScroll (section: string) {
    const sectionToScroll = document.querySelector(`#${section}`);

    if (sectionToScroll) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                sectionToScroll.scrollIntoView({behavior: "smooth"})
            })
        })
    }
}