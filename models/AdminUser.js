const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AdminUserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	catmenu: {
		type: Object,
		default: {}
	}
});

module.exports = User = mongoose.model("adminusers", AdminUserSchema);
