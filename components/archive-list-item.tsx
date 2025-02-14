import { Post } from "contentlayer/generated"
import dayjs from 'dayjs';
export const ArchiveListItem = (post: Post) => {
  const { date, title } = post;
  return (
    <div className="flex">
      <span>{dayjs(date).format('MM月DD日')}</span>
      <div>{title}</div>
      <div>tag</div>
    </div>
  )
}