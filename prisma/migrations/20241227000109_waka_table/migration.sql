-- CreateTable
CREATE TABLE `waka` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `n` INTEGER NOT NULL,
    `bodyKanji` VARCHAR(191) NOT NULL,
    `bodyKana` VARCHAR(191) NOT NULL,
    `nameKanji` VARCHAR(191) NOT NULL,
    `nameKana` VARCHAR(191) NOT NULL,
    `kimariji` VARCHAR(191) NOT NULL,
    `imageWref` VARCHAR(191) NOT NULL,
    `imageURL` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `waka_n_key`(`n`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
