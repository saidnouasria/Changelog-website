/*
  Warnings:

  - You are about to drop the column `BelongsToId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `belongsToId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_BelongsToId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "BelongsToId",
ADD COLUMN     "belongsToId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
