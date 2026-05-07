-- DropIndex
DROP INDEX "Post_autherId_key";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_autherId_fkey" FOREIGN KEY ("autherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
