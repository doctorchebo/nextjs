export default function handler(req, res){
    res.clearPreviewData()
    res.end('The data was cleared')
}