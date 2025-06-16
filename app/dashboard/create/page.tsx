import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogPage() {
  return (
    <div>
      <Card className="max-w-2xl mx-auto mt-10">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a new post to share</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="" className="space-y-4">
            <div className=" flex flex-col space-y-4">
              <Label>Title</Label>
              <Input required type="text" />
            </div>
            <div className=" flex flex-col space-y-4">
              <Label>Content</Label>
              <Textarea required />
            </div>
            <div className=" flex flex-col space-y-4">
              <Label>Image URL</Label>
              <Input required type="text" />
            </div>
            <Button>Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
