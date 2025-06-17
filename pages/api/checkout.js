export default function handler(req, res) {
	if (req.method === 'POST') {
		res.json('Checkout successful');
		return;
	}
	const { name, email, city, postalCode, streetAddress, country } = req.body;
}
