import { UserService } from '@/service/UserService';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const userId = UserService.deleteUser(params.id);
  return Response.json({ userId });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const user = await request.json();
  const newUser = UserService.updateUser(params.id as string, user);
  return Response.json(newUser);
}
