document.addEventListener("DOMContentLoaded", function() {
    // Select all bid buttons
    const bidButtons = document.querySelectorAll(".bid-button");

    // Add click event listeners to each button
    bidButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Find the closest auction item element
            const auctionItem = button.closest(".auction-item");

            // Select the bid amount element
            const bidAmountElement = auctionItem.querySelector(".bid-amount");

            // Get the current bid amount and increase it
            let currentBid = parseInt(bidAmountElement.textContent.replace("$", ""));
            let newBid = currentBid + 10;

            // Update the bid amount element with the new bid
            bidAmountElement.textContent = "$" + newBid;
        });
    });
});
function addItem() {
    // Get values from the form
    const itemName = document.getElementById("itemName").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const startingBid = parseInt(document.getElementById("startingBid").value);

    // Create a new auction item element
    const auctionItem = document.createElement("div");
    auctionItem.className = "auction-item";
    auctionItem.innerHTML = `
        <h3>${itemName}</h3>
        <p>${itemDescription}</p>
        <p>Current Bid: <span class="bid-amount">$${startingBid}</span></p>
        <button class="bid-button" onclick="increaseBid(this)">Bid Now</button>
    `;

    // Add the new item to the auction list
    document.getElementById("auction-list").appendChild(auctionItem);

    // Clear the form
    document.getElementById("sellForm").reset();
}

function increaseBid(button) {
    // Find the bid amount span relative to the button clicked
    const bidAmountSpan = button.previousElementSibling.querySelector(".bid-amount");
    let currentBid = parseInt(bidAmountSpan.innerText.replace("$", ""));
    let newBid = currentBid + 10;
    bidAmountSpan.innerText = $${newBid};
}