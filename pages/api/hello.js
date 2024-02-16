const handler = (req, res) => {
    const output = { text: 'Hello' };
    res.status(200).json(output);
}

export default handler