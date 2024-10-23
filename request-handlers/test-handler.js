import testModel from "../model/test-model.js";

export async function test(req, res) {
    res.status(400).json({ msg: "error" });
}

export async function write(req, res) {
    try {
        let data = req.body;
        let reslut = await testModel.create({ name: data.name, phone: data.phone, email: data.email });
        console.log(reslut);
        res.status(201).json({ msg: "Wite successfully!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Write error" })
    }
}