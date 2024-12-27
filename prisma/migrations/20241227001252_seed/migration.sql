/*
  Warnings:

  - You are about to drop the column `n` on the `waka` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `waka_n_key` ON `waka`;

-- AlterTable
ALTER TABLE `waka` DROP COLUMN `n`;
