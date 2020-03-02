(function() {
    "use strict";
    const button_nav = document.getElementById('button-nav');
    const box = document.getElementById('pop-up');
    let curr_state;

    // Game Data:
    let match = {
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        curr_player: 0,
        cards_picked: 0,
        flipped_cards: 0,
        theme_color: 'red',
        end_game_condition: 6
    };

    // Displays buttons BEFORE game starts:
    if (button_nav.className == "before")   {
        button_nav.innerHTML = '<button id="rules">Rules</button><button id="start">Start Game</button><button id="options">Options</button>';
    }

    // Click to display game rules:
    document.getElementById('rules').addEventListener('click', function(e)  {
        e.preventDefault();
        if (button_nav.className == 'before')   {
            curr_state = 0;
        } else  {
            curr_state = 1;
        } 

        // Adding text:
        button_nav.setAttribute('class', 'invisible');
        box.setAttribute('class', 'rule-text');
        box.innerHTML = '<div><h3>Rules</h3><p>By clicking start game, a player will be chosen by random to start. On their turn, each player will choose two cards. <strong>If the cards match, the current player gets a point and chooses again</strong>. However, if the cards <strong>do not match</strong>, the next player gets a try. The player with the most points after all cards have been matched, wins!</p><div id="exit-rules" class="reverse"><button>Okay</button></div></div>';

        // Stylizing:
        document.getElementById('exit-rules').style.cssText = 'text-align: center; margin-left: auto; margin-right: auto;';
        box.querySelector('h3').style.textAlign = 'center';

        // Click to exit rules:
        document.getElementById('exit-rules').addEventListener('click', function(e) {
            e.preventDefault();
            box.setAttribute('class', 'invisible');
            if (curr_state == 0)    {
                button_nav.setAttribute('class', 'before');
            } else  {
                button_nav.setAttribute('class', 'after');
            }
        });
    });

    // Click to display game options (Will only display BEFORE game starts):
    document.getElementById('options').addEventListener('click', function(e)    {
        e.preventDefault();

        // Adding text:
        button_nav.setAttribute('class', 'invisible');
        box.setAttribute('class', 'option-text');
        box.innerHTML = '<div><h3>Options</h3><div class="reverse"><h4>Number of Cards</h4><div id="card-options"><button id="four" class="not-chosen">4</button><button id="six" class="not-chosen">6</button><button id="eight" class="not-chosen">8</button><button id="ten" class="not-chosen">10</button></div></div><div class="reverse"><h4>Theme Color</h4><div id="color-options"><button id="r" class="not-chosen">Red</button><button id="y" class="not-chosen">Yellow</button><button id="b" class="not-chosen">Blue</button></div></div><div id="exit-options" class="reverse"><button>Okay</button></div></div>';

        // Stylizing:
        let card_btns = box.querySelectorAll('#card-options button');
        let color_btns = box.querySelectorAll('#color-options button');

        if (match.theme_color == 'red') {
            for (let i = 0; i < card_btns.length; i++)  {
                if (card_btns[i].innerHTML == match.end_game_condition) {
                    card_btns[i].style.cssText = 'background-color: #92140C; border-color: #FFF8F0; color: #FFF8F0;';
                    card_btns[i].className = 'chosen';
                }
            }
            for (let i = 0; i < color_btns.length; i++) {
                if (color_btns[i].id == 'r')    {
                    color_btns[i].style.cssText = 'background-color: #92140C; border-color: #FFF8F0; color: #FFF8F0;';
                    color_btns[i].className = 'chosen';
                }
            }
        } else if (match.theme_color == 'yellow')   {
            for (let i = 0; i < card_btns.length; i++)  {
                if (card_btns[i].innerHTML == match.end_game_condition) {
                    card_btns[i].style.cssText = 'background-color: #E6AC00; border-color: #FFF8F0; color: #FFF8F0;';
                    card_btns[i].className = 'chosen';
                }
            }
            for (let i = 0; i < color_btns.length; i++) {
                if (color_btns[i].id == 'y')    {
                    color_btns[i].style.cssText = 'background-color: #E6AC00; border-color: #FFF8F0; color: #FFF8F0;';
                    color_btns[i].className = 'chosen';
                }
            }
        } else  {
            for (let i = 0; i < card_btns.length; i++)  {
                if (card_btns[i].innerHTML == match.end_game_condition) {
                    card_btns[i].style.cssText = 'background-color: #3366CC; border-color: #FFF8F0; color: #FFF8F0;';
                    card_btns[i].className = 'chosen';
                }
            }
            for (let i = 0; i < color_btns.length; i++) {
                if (color_btns[i].id == 'b')    {
                    color_btns[i].style.cssText = 'background-color: #3366CC; border-color: #FFF8F0; color: #FFF8F0;';
                    color_btns[i].className = 'chosen';
                }
            }
        }

        box.style.marginTop = '250px';
        document.getElementById('exit-options').style.cssText = 'text-align: center; margin-left: auto; margin-right: auto; padding-bottom: 20px; padding-top: 10px;';
        box.querySelector('h3').style.textAlign = 'center';

        let h4 = box.querySelectorAll('h4');
        for (let i = 0; i < h4.length; i++) {
            h4[i].style.textAlign = 'center';
        }

        // Click to change number of cards in game:
        document.getElementById('four').addEventListener('click', function(e)   {
            e.preventDefault();
            for (let i = 0; i < card_btns.length; i++)  {
                card_btns[i].className = 'not-chosen';
                if (match.theme_color == 'red') {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #92140C; color: #92140C;';
                } else if (match.theme_color == 'yellow')  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #E6AC00; color: #E6AC00;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #3366CC; color: #3366CC;';
                }
            }
            match.end_game_condition = 4;
            document.getElementById('four').className = 'chosen';
            if (match.theme_color == 'red') {
                document.getElementById('four').style.cssText = 'background-color: #92140C; border-color: #FFF8F0; color: #FFF8F0;';
            } else if (match.theme_color == 'yellow')   {
                document.getElementById('four').style.cssText = 'background-color: #E6AC00; border-color: #FFF8F0; color: #FFF8F0;';
            } else  {
                document.getElementById('four').style.cssText = 'background-color: #3366CC; border-color: #FFF8F0; color: #FFF8F0;';
            }
        });

        document.getElementById('six').addEventListener('click', function(e)   {
            e.preventDefault();
            for (let i = 0; i < card_btns.length; i++)  {
                card_btns[i].className = 'not-chosen';
                if (match.theme_color == 'red') {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #92140C; color: #92140C;';
                } else if (match.theme_color == 'yellow')  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #E6AC00; color: #E6AC00;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #3366CC; color: #3366CC;';
                }
            }
            match.end_game_condition = 6;
            document.getElementById('six').className = 'chosen';
            if (match.theme_color == 'red') {
                document.getElementById('six').style.cssText = 'background-color: #92140C; border-color: #FFF8F0; color: #FFF8F0;';
            } else if (match.theme_color == 'yellow')   {
                document.getElementById('six').style.cssText = 'background-color: #E6AC00; border-color: #FFF8F0; color: #FFF8F0;';
            } else  {
                document.getElementById('six').style.cssText = 'background-color: #3366CC; border-color: #FFF8F0; color: #FFF8F0;';
            }
        });

        document.getElementById('eight').addEventListener('click', function(e)   {
            e.preventDefault();
            for (let i = 0; i < card_btns.length; i++)  {
                card_btns[i].className = 'not-chosen';
                if (match.theme_color == 'red') {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #92140C; color: #92140C;';
                } else if (match.theme_color == 'yellow')  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #E6AC00; color: #E6AC00;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #3366CC; color: #3366CC;';
                }
            }
            match.end_game_condition = 8;
            document.getElementById('eight').className = 'chosen';
            if (match.theme_color == 'red') {
                document.getElementById('eight').style.cssText = 'background-color: #92140C; border-color: #FFF8F0; color: #FFF8F0;';
            } else if (match.theme_color == 'yellow')   {
                document.getElementById('eight').style.cssText = 'background-color: #E6AC00; border-color: #FFF8F0; color: #FFF8F0;';
            } else  {
                document.getElementById('eight').style.cssText = 'background-color: #3366CC; border-color: #FFF8F0; color: #FFF8F0;';
            }
        });

        document.getElementById('ten').addEventListener('click', function(e)   {
            e.preventDefault();
            for (let i = 0; i < card_btns.length; i++)  {
                card_btns[i].className = 'not-chosen';
                if (match.theme_color == 'red') {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #92140C; color: #92140C;';
                } else if (match.theme_color == 'yellow')  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #E6AC00; color: #E6AC00;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #3366CC; color: #3366CC;';
                }
            }
            match.end_game_condition = 10;
            document.getElementById('ten').className = 'chosen';
            if (match.theme_color == 'red') {
                document.getElementById('ten').style.cssText = 'background-color: #92140C; border-color: #FFF8F0; color: #FFF8F0;';
            } else if (match.theme_color == 'yellow')   {
                document.getElementById('ten').style.cssText = 'background-color: #E6AC00; border-color: #FFF8F0; color: #FFF8F0;';
            } else  {
                document.getElementById('ten').style.cssText = 'background-color: #3366CC; border-color: #FFF8F0; color: #FFF8F0;';
            }
        });

        // Click to change theme color:
        document.getElementById('r').addEventListener('click', function(e)  {
            e.preventDefault();
            match.theme_color = 'red';
            document.querySelector('body').className = 'red';
            for (let i = 0; i < color_btns.length; i++)  {
                color_btns[i].className = 'not-chosen';
                color_btns[i].style.cssText = 'background-color: transparent; border-color: #92140C; color: #92140C;';
            } 
            document.getElementById('r').className = 'chosen';
            document.getElementById('r').style.cssText = 'background-color: #92140C; border-color: #FFF8F0; color: #FFF8F0;';
            for (let i = 0; i < card_btns.length; i++) {
                if (card_btns[i].className == 'chosen') {
                    card_btns[i].style.cssText = 'background-color: #92140C; border-color: #FFF8F0; color: #FFF8F0;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: #FFF8F0; border-color: #92140C; color: #92140C;';
                }
            }
        });

        document.getElementById('y').addEventListener('click', function(e)  {
            e.preventDefault();
            match.theme_color = 'yellow';
            document.querySelector('body').className = 'yellow';
            for (let i = 0; i < color_btns.length; i++)  {
                color_btns[i].className = 'not-chosen';
                color_btns[i].style.cssText = 'background-color: transparent; border-color: #E6AC00; color: #E6AC00;';
            }
            document.getElementById('y').className = 'chosen';
            document.getElementById('y').style.cssText = 'background-color: #E6AC00; border-color: #FFF8F0; color: #FFF8F0;';
            for (let i = 0; i < card_btns.length; i++) {
                if (card_btns[i].className == 'chosen') {
                    card_btns[i].style.cssText = 'background-color: #E6AC00; border-color: #FFF8F0; color: #FFF8F0;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: #FFF8F0; border-color: #E6AC00; color: #E6AC00;';
                }
            }
        });

        document.getElementById('b').addEventListener('click', function(e)  {
            e.preventDefault();
            match.theme_color = 'blue';
            document.querySelector('body').className = 'blue';
            for (let i = 0; i < color_btns.length; i++)  {
                color_btns[i].className = 'not-chosen';
                color_btns[i].style.cssText = 'background-color: transparent; border-color: #3366CC; color: #3366CC;';
            } 
            document.getElementById('b').className = 'chosen';
            document.getElementById('b').style.cssText = 'background-color: #3366CC; border-color: #FFF8F0; color: #FFF8F0;';
            for (let i = 0; i < card_btns.length; i++) {
                if (card_btns[i].className == 'chosen') {
                    card_btns[i].style.cssText = 'background-color: #3366CC; border-color: #FFF8F0; color: #FFF8F0;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: #FFF8F0; border-color: #3366CC; color: #3366CC;';
                }
            }
        });

        // Click to exit options:
        document.getElementById('exit-options').addEventListener('click', function(e) {
            e.preventDefault();
            box.setAttribute('class', 'invisible');
            button_nav.setAttribute('class', 'before');
        });
    });

}());