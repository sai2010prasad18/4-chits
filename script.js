
      let clicks = 0;
      //////genrate chit//////
      var totalPoints = 0;
      /////genarte chit/////
      document.getElementById("new").addEventListener("click", function () {
        clicks = clicks + 1;

        if (document.getElementById("player-selection").value == "Player 1") {
          document.getElementById("name1").value = "Player 2";
          document.getElementById("name2").value = "Player 3";
          document.getElementById("name3").value = "Player 4";
        } else if (document.getElementById("player-selection").value == "Player 2") {
          document.getElementById("name1").value = "Player 1";
          document.getElementById("name2").value = "Player 3";
          document.getElementById("name3").value = "Player 4";
        } else if (document.getElementById("player-selection").value == "Player 3") {
          document.getElementById("name1").value = "Player 1";
          document.getElementById("name2").value = "Player 2";
          document.getElementById("name3").value = "Player 4";
        } else if (document.getElementById("player-selection").value == "Player 4") {
          document.getElementById("name1").value = "Player 1";
          document.getElementById("name2").value = "Player 2";
          document.getElementById("name3").value = "Player 3";
        }
      


        const characters = ["King", "Queen", "Police", "Theif"]
        const points = ["1000", "500", "100", "0"]

        document.getElementById("chitarea").innerHTML = characters[Math.floor(Math.random() * characters.length)];

        if (document.getElementById("chitarea").innerText == "Police") {
          document.getElementById("x").innerHTML = "100";
          document.getElementById("name1").style.background = '#444444';
          document.getElementById("name2").style.background = '#444444';
          document.getElementById("name3").style.background = '#444444';

        } else if (document.getElementById("chitarea").innerText == "King") {
          document.getElementById("x").innerHTML = "1000";
          document.getElementById("name1").disabled = true;
          document.getElementById("name2").disabled = true;
          document.getElementById("name3").disabled = true;
          document.getElementById("name1").style.background = '#808080';
          document.getElementById("name2").style.background = '#808080';
          document.getElementById("name3").style.background = '#808080';

        } else if (document.getElementById("chitarea").innerText == "Queen") {
          document.getElementById("x").innerHTML = "500";
          document.getElementById("name1").disabled = true;
          document.getElementById("name2").disabled = true;
          document.getElementById("name3").disabled = true;
          document.getElementById("name1").style.background = '#808080';
          document.getElementById("name2").style.background = '#808080';
          document.getElementById("name3").style.background = '#808080';

        } else if (document.getElementById("chitarea").innerText == "Theif") {
          document.getElementById("x").innerHTML = "0";
          document.getElementById("name1").disabled = true;
          document.getElementById("name2").disabled = true;
          document.getElementById("name3").disabled = true;
          document.getElementById("name1").style.background = '#808080';
          document.getElementById("name2").style.background = '#808080';
          document.getElementById("name3").style.background = '#808080';

        }

        document.getElementById("new").disabled = true;
        document.getElementById("new").style.background = '#808080';

        document.getElementById("next-round").addEventListener("click", function () {
          document.getElementById("new").disabled = false;
          document.getElementById("new").style.background = '#444444';
        });

        if (clicks <= 10) {
          totalPoints = totalPoints + parseInt(document.getElementById("x").innerText);
        }

        if (clicks == 10) {
          score10 = document.getElementById("x").innerText - 9;
          document.getElementById("new").disabled = true;
          document.getElementById("next-round").disabled = true;
          document.getElementById("new").style.background = '#808080';
          document.getElementById("next-round").style.background = '#808080';
        }
        console.log(totalPoints);
    });
      



/////////DB Configuration////Google Firebase///////xs
//   db.collection('cafes').get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//     });
//    }).catch(err => {
//      console.log(err);
//    });