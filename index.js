import placeholderPropertyObj from "./properties/placeholderPropertyObj.js";
import propertyForSaleArr from "./properties/propertyForSaleArr.js";

function getPropertyHtml(arr = [placeholderPropertyObj]) {
  return arr.map((item) => {
      const { propertyLocation, priceGBP, roomsM2, comment, image } = item;
      const sumOfRoomsSize = roomsM2.reduce((total, currentRoom) => total + currentRoom);
      return `<section class="card">
				<img src="./images/${image}" alt="house for sold">
				<div class="card-right">
					<h2>${propertyLocation}</h2>
					<h3>${priceGBP} GBP</h3>
					<p>${comment}</p>
					<h3>${sumOfRoomsSize} m&sup2</h3>
				</div>
		</section>`}).join(" ");
}

document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr);
