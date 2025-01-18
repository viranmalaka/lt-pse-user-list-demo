import { UserService } from "@/service/UserService";

export async function GET() {
  const users = UserService.getUserList();
  return Response.json(users);
}

export async function POST(request: Request) {
  const user = await request.json();
  const newUser = UserService.addUser(user);
  return Response.json(newUser);
}
