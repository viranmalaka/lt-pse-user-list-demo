import { UserService } from '@/service/UserService';

export async function DELETE() {
  const users = UserService.getUserList();
  return Response.json(users);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  console.log(params);
  const user = await request.json();
  const newUser = UserService.updateUser(params.id as string, user);
  return Response.json(newUser);
}
