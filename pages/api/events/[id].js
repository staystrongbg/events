const { events } = require('./data.json');
//since this is running on server - we use commonjs syntax
// getting single event by id
export default function handler(req, res) {
  const evt = events.find((ev) => ev.id === req.query.id);
  if (req.method === 'GET') {
    res.status(200).json(evt);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
