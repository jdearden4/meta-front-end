function ModeToggler() {
    const darkModeOn = true;
    const darkMode = <h1>Dark mode is On</h1>;
    const lightMode = <h1>Light mode is On</h1>;

    function handleClick() {
        darkModeOn = !darkModeOn;
        if(darkModeOn == true) {
            console.log('dark mode is on');
        } else {
            console.log('light mode is on');
        }
    }

    return (
    <div>
        {darkModeOn? darkMode : lightMode}
        <button onBlick={handleClick}>
            Click me
        </button>
    </div>
    )

}
export default ModeToggler;