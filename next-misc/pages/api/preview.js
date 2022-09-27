export default function handler (req, res) {
    res.setPreviewData({name: "Marcelo"})
    res.redirect(req.query.redirect)
}