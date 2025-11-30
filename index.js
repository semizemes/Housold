import placeholderPropertyObj from "./properties/placeholderPropertyObj.js";
import propertyForSaleArr from "./properties/propertyForSaleArr.js";

function getPropertyHtml(arr = [placeholderPropertyObj]) {
  let htmlContent = [];

  function sumOfRoomsSize(obj) {
    return obj.reduce((total, currentRoom) => total + currentRoom);
  }

  arr.map((item) => cardMaker(item));

  function cardMaker(obj) {
    const { propertyLocation, priceGBP, roomsM2, comment, image } = obj;
    htmlContent.push(`
        <section class="card">
				<img src="/images/${image}" alt="house for sold">
				<div class="card-right">
					<h2>${propertyLocation}</h2>
					<h3>${priceGBP} GBP</h3>
					<p>${comment}</p>
					<h3>${sumOfRoomsSize(roomsM2)} m&sup2</h3>
				</div>
		</section>
    `);
  }

  return htmlContent.join(" ");
}

document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr);
