// Load nem-browser library
var nem = require("nem-sdk").default;


// Create random bytes from PRNG
var rBytes = nem.crypto.nacl.randomBytes(32);

// Convert the random bytes to hex
var privateKey = nem.utils.convert.ua2hex(rBytes);


var keyPair = nem.crypto.keyPair.create(privateKey);

var publicKey = keyPair.publicKey.toString();

var address = nem.model.address.toAddress(publicKey, nem.model.network.data.mainnet.id);


var qrcodePrivatekey = new QRCode(document.getElementById("qrprivatekey"), {
	width : 200,
	height : 200
});

var qrcodePublickey = new QRCode(document.getElementById("qrpublickey"), {
	width : 200,
	height : 200
});

var qrcodePublicAdd = new QRCode(document.getElementById("qrpublicaddress"), {
	width : 200,
	height : 200
});

var qrcodeDonations = new QRCode(document.getElementById("qrdonations"), {
	width : 200,
	height : 200,
    colorDark : "#007acc"
});


$('#privatekey').html(privateKey);
qrcodePrivatekey.makeCode(privateKey);

$('#publickey').html(publicKey);
qrcodePublickey.makeCode(publicKey);

$('#publicaddress').html(address);
qrcodePublicAdd.makeCode(address);


qrcodeDonations.makeCode("NBSTZ5FIQHZ2LOICL3X2NAEP53OIQS6LZOUXIAR4");

