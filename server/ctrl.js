module.exports = {
    getBins:(req,res)=>{
        console.log(req.params)
        const {id} = req.params
        // console.log(id)
        const db = req.app.get('db')

        db.get_bins_by_id([id]).then(resp=>{
            console.log(resp)
            res.status(200).send(resp)
        }).catch((err)=>{
            console.log(err)
            res.status(500).send(err)
        })
    },
    getBin:(req,res)=>{
        // console.log(req.params)
        // console.log(req.body)
        const {id} = req.params
        const db = req.app.get('db')
        let arr = id.split('')
        let shelf_id = arr[0]
        let bin_id = arr[1]
        
        db.get_items_by_id([shelf_id, bin_id]).then(resp=>{
            console.log(resp)
            res.status(200).send(resp)
        }).catch((err)=>{
            console.log(err)
            res.status(500).send(err)
        })
    
    },
    updateBin:(req,res)=>{
        const db = req.app.get('db')
        const{ item, price} = req.body
        const{ shelf_id, bin_id} = req.params
        
        db.update_bin_by_id([shelf_id, bin_id, item, price]).then(resp=>{
            console.log(resp)
            res.status(200).send(resp)
        }).catch((err)=>{
            console.log(err)
            res.status(500).send(err)
        })
    },
    deleteBin:(req, res)=>{
        // console.log(req.params)
       const {shelf_id, bin_id} = req.params
        const db = req.app.get('db')

        db.delete_bin_by_id([shelf_id, bin_id]).then(resp=>{
            console.log(resp)
            res.status(200).send(resp)
        }).catch((err)=>{
            console.log(err)
            res.status(500).send(err)
        })
    },
    addBin:(req,res)=>{
        const { id } = req.params
        console.log(req.params)
        let arr = id.split('')
        let shelf_id = arr[0]
        let bin_id = arr[1]
        const {item, price} = req.body
        const db = req.app.get('db')

        db.add_bin_by_id([shelf_id, bin_id, item, price]).then(resp=>{
            console.log(resp)
            res.status(200).send(resp)
        }).catch((err)=>{
            console.log(err)
            res.status(500).send(err)
        })
    }
}