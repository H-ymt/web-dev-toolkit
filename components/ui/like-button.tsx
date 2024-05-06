import { Heart } from 'lucide-react'

export default function LikeButton() {
  return (
    <button
      type="button"
      title="Comming soon!"
      className="grid size-8 place-items-center rounded-lg"
    >
      <Heart size={16} strokeWidth={1} className="text-accent" />
      <span className="sr-only">Like</span>
    </button>
  )
}
