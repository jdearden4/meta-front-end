// function Btn() {
//     const clickHandler =
//     () => console.log('clicked')
//     return (
//         <button onClick={clickHandler}>
//             click me
//         </button>
//     )
// }

// export default Btn;

function Btn() {
    const mouseOver =
    () => console.log('mouse over')
    return (
        <button onMouseOver={mouseOver}>
            click me
        </button>
    )
}

export default Btn;