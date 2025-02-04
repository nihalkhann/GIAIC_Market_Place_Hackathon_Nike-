// schemas/video.ts
export default {
  name: "videoAd",
  title: "Video Ad",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required().min(5).max(100),
    },
    {
      name: "videoFile",
      title: "Video File",
      type: "file",
      description: "Upload your video file here.",
      validation: (Rule: any) => Rule.required(),
    },
    
    {
      name: "isLooping",
      title: "Looping Video",
      type: "boolean",
      description: "Should this video play infinitely?",
      initialValue: true,
    },
  ],
};
