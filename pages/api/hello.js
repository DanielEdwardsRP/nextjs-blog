export default function handler(req, res) {
  if (req.method === 'POST') {
	  res.status(200).json({ text: 'Confirming this was a POST request.' });
	} else {
	  res.status(200).json({ text: 'Confirming this was NOT a POST request.' });
	}
}