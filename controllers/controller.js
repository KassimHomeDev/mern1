let Data = [
    {
        id:1,
        title:'JAVA',
        text:"hello java"
    },
    {
        id:2,
        title:'JAVA',
        text:"hello java"
    },
    {
        id:3,
        title:'JAVA',
        text:"hello java"
    }
]

module.exports = class manager {

    
    static async getHome(req, res, next){
        res.status(201).json({sucess: true, data:Data});
       
    }
    static async addData(req, res, next){
        const rsv_title = req.body.title;
        const rsv_text = req.body.text;
        let build_id = Data.length + 1;
        console.log(build_id);
        Data.push({build_id, title:rsv_title, text:rsv_text})
        res.status(201).json({sucess: true, message:"Adding post succee!"}); 
    }
}