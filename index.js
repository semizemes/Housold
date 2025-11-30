import {placeholderPropertyObj as placeholder} from "./properties/placeholderPropertyObj.js";

function getPropertyHtml(arr = placeholder) {
    const sumOfRoomsSize = arr.roomsM2.reduce((total, currentRoom) => total + currentRoom)

    return `
        <section class="card">
				<img src="/images/${arr.image}" alt="house for sold">
				<div class="card-right">
					<h2>${arr.propertyLocation}</h2>
					<h3>${arr.priceGBP} GBP</h3>
					<p>${arr.comment}</p>
					<h3>${sumOfRoomsSize} m&sup2</h3>
				</div>
		</section>
    `
}

document.getElementById('container').innerHTML = getPropertyHtml()