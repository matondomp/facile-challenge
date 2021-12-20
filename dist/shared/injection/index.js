"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var encriptRepository_1 = require("@modules/encript_words/infra/typeorm/repository/encriptRepository");
var encriptProvider_1 = require("@shared/provider/encript_words_provider/implementation/encriptProvider");
var decriptProvider_1 = require("@shared/provider/decript_words_provider/implementation/decriptProvider");
tsyringe_1.container.registerSingleton('EncriptRepository', encriptRepository_1.EncriptRepository);
tsyringe_1.container.registerSingleton('EncriptProvider', encriptProvider_1.EncriptWordsProvider);
tsyringe_1.container.registerSingleton('DecriptProvider', decriptProvider_1.DecriptWordsProvider);
