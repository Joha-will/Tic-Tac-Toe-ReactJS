
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {player, square} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
   // const [gameBoard, setGameBoard] = useState(initialGameBoard)

   // function handleSelectedSquare(rowIndex, colIndex) {

    //    setGameBoard((previousGameBoard) => {
    //        const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    //        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //        return updatedBoard;
    //    });

    //    onSelectSquare()
    //}
    return (

        <ol id="game-board">
            { gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (<li key={colIndex}>

                        <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
 
                    </li>))}
                </ol>

            </li>))}
        </ol>
    );
}