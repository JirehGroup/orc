// types/galleryTypes.ts

export interface Gallery {
    id: string;
    mediaType: "image" | "video";
    mediaUrl: string;
    description?: string;
  }
  
  export interface CreateGalleryDto {
    mediaType: "image" | "video";
    mediaUrl: string;
    description?: string;
  }
  
  export interface UpdateGalleryDto {
    mediaType?: "image" | "video";
    mediaUrl?: string;
    description?: string;
  }
  