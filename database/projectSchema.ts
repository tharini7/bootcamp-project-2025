import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Project = {
	title: string;
    description: string;
    href: string;
    image: string;
};


// mongoose schema 
const projectSchema = new Schema<Project>({
		title: { type: String, required: true },
        href: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
})

// defining the collection and model
const ProjectModel = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default ProjectModel;