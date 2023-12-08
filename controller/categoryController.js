const Category = require('../model/categoryModel')
const { StatusCodes } = require('http-status-codes')

// read all
const readAll = async (req,res) => {
    try{
        const categories = await Category.find({})
        return res.status(StatusCodes.OK).json({ length: categories.length, categories})
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

// read single
const readSingle = async (req,res) => {
    try{

        let id = req.params.id

        let single = await Category.findById({ _id: id})
            if(!single) 
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested category not found`})

            res.status(StatusCodes.ACCEPTED).json({ category: single})
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

// create
const create = async (req,res) => {
    try{
        let data = req.body

        let extCat = await Category.findOne({ title: data.title})
            if(extCat)
            return res.status(StatusCodes.CONFLICT).json({ msg: `Category title already exists`})

        let newCat = await Category.create(req.body)
         res.status(StatusCodes.ACCEPTED).json({ msg: `New Category created successfully`, category:newCat})
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

// update
const update = async (req,res) => {
    try{
        let id = req.params.id

        let single = await Category.findById({ _id: id})
            if(!single) 
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested category not found`})

            await Category.findByIdAndUpdate({ _id: id}, req.body)

            return res.status(StatusCodes.ACCEPTED).json({ msg: `Category updated successfully`})
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

// delete
const deleteCategory = async (req,res) => {
    try{
        let id = req.params.id

        let single = await Category.findById({ _id: id})
            if(!single) 
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested category not found`})

            await Category.findByIdAndDelete({ _id: id})

            res.status(StatusCodes.ACCEPTED).json({ msg: `Category deleted successfully`})
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

module.exports = {readAll, readSingle, create, update, deleteCategory}