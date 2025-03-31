// services/galleryService.ts

import { GalleryInput, GallerySchema } from "../schemas/gallerySchema";
import GalleryModel, { IGallery } from "../models/galleryModels";

export const galleryService = {
  getAllGalleries: async (): Promise<IGallery[]> => {
    return await GalleryModel.find();
  },

  getGallery: async (id: string): Promise<IGallery | null> => {
    return await GalleryModel.findById(id);
  },

  createGallery: async (data: GalleryInput): Promise<IGallery> => {
    const validatedData = GallerySchema.parse(data);
    const gallery = new GalleryModel(validatedData);
    return await gallery.save();
  },

  updateGallery: async (id: string, data: Partial<IGallery>): Promise<IGallery | null> => {
    const validatedData = GallerySchema.partial().parse(data);
    return await GalleryModel.findByIdAndUpdate(id, validatedData, { new: true });
  },

  deleteGallery: async (id: string): Promise<IGallery | null> => {
    return await GalleryModel.findByIdAndDelete(id);
  },
};
