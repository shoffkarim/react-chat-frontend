export interface MessageBD {
  id: number;
  chat_id: number;
  user_id: number;
  content: string;
  date_create: string;
  is_read: boolean;
}