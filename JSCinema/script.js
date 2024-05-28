let seats = document.querySelectorAll('.seat');
let seatList = [];
seatList = JSON.parse(localStorage.getItem('seatList'));

if (seats !== null && seats.length > 0) {
    seats.forEach((seat, index) => {
        seat.addEventListener('click', (event) => {
            event.target.classList.toggle('selected-seat');
            event.target.id = `${index}`;
            seatList.push({ 'id': index, 'name': 'Lord Of The Rings' });
            localStorage.setItem('seatList', JSON.stringify(seatList));
        });
    });
}

let deleteButton = document.createElement('button');
deleteButton.className = "btn btn-danger mt-3";
deleteButton.innerText = "Sil";
let cinemaSection = document.querySelector('.cinema-section');
cinemaSection.append(deleteButton);
deleteButton.addEventListener('click', () => {
    let selectedSeats = document.querySelectorAll('.selected-seat');
    if (selectedSeats !== null && selectedSeats.length > 0) {
        selectedSeats.forEach(selectedSeat => {
            selectedSeat.remove();
        });
    }
});


let movies = document.querySelector('.movies');
movies.addEventListener('change', () => {
    console.log(movies.value);
});