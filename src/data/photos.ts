// Add photographs here (put the files in public/photos/). They are shown
// desaturated toward slate, per the brand book.
export interface Photo {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}

export const photos: Photo[] = []
