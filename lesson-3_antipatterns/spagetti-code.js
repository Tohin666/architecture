'use strict';

// Сплошной спагетти-код)

const labyrinth = {
    walls: [],
    labyrinths: [
        [
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
        ],
        [
            [1, 0, 1, 1, 1],
            [1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1],
            [1, 1, 1, 0, 1],
        ],
    ],
    generateLabyrinth: function (rows, cols) {
        this.walls = [];
        for (let row = 0; row < rows; row++) {
            this.walls[row] = [];

            for (let col = 0; col < cols; col++) {
                if (col === 0 || col === cols - 1) {
                    this.walls[row][col] = 1;
                } else if (row === 0) {
                    if (this.walls[row].includes(0)) {
                        this.walls[row][col] = 1;
                    } else {
                        this.walls[row][col] = Math.round(Math.random())
                    }
                } else {
                    if (this.walls[row - 1][col] === 0) {
                        if (this.walls[row - 1][col - 1] === 1 && this.walls[row - 1][col + 1] === 1) {
                            this.walls[row][col] = 0;
                        } else if (this.walls[row - 1][col - 1] === 1 && this.walls[row - 1][col + 1] === 0) {
                            if (Math.round(Math.random())) {
                                this.walls[row][col] = 0;
                            } else {
                                this.walls[row][col + 1] = 0;
                                this.walls[row][col] = 1;
                            }
                        } else if (this.walls[row - 1][col + 1] === 1 && this.walls[row - 1][col - 1] === 0) {
                            if (Math.round(Math.random())) {
                                this.walls[row][col] = 0;
                            } else {
                                this.walls[row][col - 1] = 0;
                                this.walls[row][col] = 1;
                            }
                        } else {
                            this.walls[row][col] = Math.round(Math.random());
                        }

                    } else {
                        this.walls[row][col] = Math.round(Math.random());
                    }
                }
            }
        }

        // Close redundant entrances in last raw.
        let isEnter = false; // Будем считать что у нас пока нет входа.
        for (let col = cols - 2; col > 0; col--) {
            if (this.walls[rows - 1][col] === 0 && isEnter === false) {
                isEnter = true;
            } else {
                this.walls[rows - 1][col] = 1;
            }

        }

    },
};

const renderer = {
    labyrinthRender(array) {
        const table = document.getElementById('labyrinth');
        table.innerHTML = "";
        for (let row = 0; row < array.length; row++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            for (let col = 0; col < array[row].length; col++) {
                const td = document.createElement('td');
                let tdClass = array[row][col] ? 'wall' : 'empty';
                if (row === man.manPositionRow && col === man.manPositionCol) {
                    tdClass = 'blinkingMan';
                }

                td.classList.add(tdClass);
                tr.appendChild(td);
            }
        }
    },
};

const man = {
    manStartPositionRow: null,
    manStartPositionCol: null,
    manPositionRow: null,
    manPositionCol: null,
    direction: 'up',
    nextStepRow: null,
    nextStepCol: null,
    manStartPosition() {
        this.direction = 'up';
        const lastRow = game.labyrinth.walls.length - 1;
        this.manStartPositionRow = lastRow;
        for (let col = game.labyrinth.walls[lastRow].length - 1; col >= 0; col--) {
            if (game.labyrinth.walls[lastRow][col] === 0) {
                this.manStartPositionCol = col;
                break;
            }
        }
        this.manPositionRow = this.manStartPositionRow;
        this.manPositionCol = this.manStartPositionCol;

    },
    makeStep() {
        this.turnRight();
        for (let i = 1; i <= 5; i++) {
            this.nextStep();
            if (game.isOut() || game.isWall()) {
                this.turnLeft();
                continue;
            }
            break;
        }

        this.manPositionRow = this.nextStepRow;
        this.manPositionCol = this.nextStepCol;
        if (game.status !== 'generating') {
            renderer.labyrinthRender(labyrinth.walls);
        }

        game.isEnd();
        console.log(this.manPositionRow, this.manPositionCol)
    },

    nextStep() {

        this.nextStepRow = this.manPositionRow;
        this.nextStepCol = this.manPositionCol;
        if (this.direction === 'right') {
            this.nextStepCol = this.manPositionCol + 1
        } else if (this.direction === 'up') {
            this.nextStepRow = this.manPositionRow - 1
        } else if (this.direction === 'left') {
            this.nextStepCol = this.manPositionCol - 1
        } else {
            this.nextStepRow = this.manPositionRow + 1
        }
    },

    turnLeft() {
        if (this.direction === 'right') {
            this.direction = 'up'
        } else if (this.direction === 'up') {
            this.direction = 'left'
        } else if (this.direction === 'left') {
            this.direction = 'down'
        } else {
            this.direction = 'right'
        }
    },
    turnRight() {
        if (this.direction === 'right') {
            this.direction = 'down'
        } else if (this.direction === 'up') {
            this.direction = 'right'
        } else if (this.direction === 'left') {
            this.direction = 'up'
        } else {
            this.direction = 'left'
        }
    },
};

const settings = {
    rowsCount: null,
    colsCount: null,
    minRowsCount: 5,
    maxRowsCount: 25,
    minColsCount: 5,
    maxColsCount: 30,
    speed: 10,
};

const game = {
    settings,
    labyrinth,
    timer: null,
    status: 'stop',
    test: false,
    init() {
        document.getElementById('rowsCount').min = this.settings.minRowsCount;
        document.getElementById('rowsCount').max = this.settings.maxRowsCount;
        document.getElementById('colsCount').min = this.settings.minColsCount;
        document.getElementById('colsCount').max = this.settings.maxColsCount;

        labyrinth.walls = labyrinth.labyrinths[Math.floor(Math.random() * labyrinth.labyrinths.length)].slice();
        man.manStartPosition();
        renderer.labyrinthRender(labyrinth.walls);

        document.getElementById('chooseLabyrinth').addEventListener('click', (item) => {
            if (item['target'].tagName === 'BUTTON') {
                let labyrinthNumber = item['target']['id'].replace('labyrinth', '');
                labyrinth.walls = labyrinth.labyrinths[labyrinthNumber - 1].slice();
            }
            man.manStartPosition();
            renderer.labyrinthRender(labyrinth.walls);
        });
        document.getElementById('startButton').addEventListener('click', () => this.start());
        document.getElementById('generateButton').addEventListener('click', () => this.generate());

    },

    start() {
        man.manStartPosition();
        this.timer = setInterval(() => man.makeStep(), 1000 / settings.speed);
    },

    generate() {
        this.settings.rowsCount = parseInt(document.getElementById('rowsCount').value);
        this.settings.colsCount = parseInt(document.getElementById('colsCount').value);

        if (this.settings.rowsCount < this.settings.minRowsCount) {
            this.settings.rowsCount = this.settings.minRowsCount;
        }
        if (this.settings.rowsCount > this.settings.maxRowsCount) {
            this.settings.rowsCount = this.settings.maxRowsCount;
        }
        if (this.settings.colsCount < this.settings.minColsCount) {
            this.settings.colsCount = this.settings.minColsCount;
        }
        if (this.settings.colsCount > this.settings.maxColsCount) {
            this.settings.colsCount = this.settings.maxColsCount;
        }

        document.getElementById('rowsCount').value = this.settings.rowsCount;
        document.getElementById('colsCount').value = this.settings.colsCount;

        this.test = false;
        while (true) {
            this.status = 'generating';
            labyrinth.generateLabyrinth(this.settings.rowsCount, this.settings.colsCount);

            man.manStartPosition();
            console.log(this.labyrinth.walls);

            if (this.testLabyrinth()) {
                // this.status = 'ready';
                man.manPositionRow = man.manStartPositionRow;
                man.manPositionCol = man.manStartPositionCol;
                renderer.labyrinthRender(this.labyrinth.walls);

                break;
            }
        }
    },

    testLabyrinth() {
        for (let i = 0; i < (this.settings.rowsCount * this.settings.colsCount); i++) {
            man.makeStep();
        }
        return this.test;
    },

    /**
     * Checks is there wall on next step.
     * @returns {boolean} true, if wall exists, otherwise false.
     */
    isWall() {
        if (this.labyrinth.walls[man.nextStepRow][man.nextStepCol]) {
            return true;
        }
    },

    /**
     * Checks if man go out from labyrinth.
     * @returns {boolean} true, if man go out.
     */
    isOut() {
        if (man.nextStepRow === this.settings.rowsCount || man.nextStepRow === -1) {
            return true;
        }
    },

    isEnd() {
        if (man.manPositionRow === 0) {
            window.clearInterval(this.timer);
            if (this.status === 'generating') {
                this.status = 'ready';
                this.test = true;
            }
        }
    }
};

// Initiate game after page is loaded.
window.onload = game.init();