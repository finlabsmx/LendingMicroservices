"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CustomersController = class CustomersController {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async create(customers) {
        return await this.customerRepository.create(customers);
    }
    async count(where) {
        return await this.customerRepository.count(where);
    }
    async find(filter) {
        return await this.customerRepository.find(filter);
    }
    async updateAll(customers, where) {
        return await this.customerRepository.updateAll(customers, where);
    }
    async findById(id) {
        return await this.customerRepository.findById(id);
    }
    async updateById(id, customers) {
        return await this.customerRepository.updateById(id, customers);
    }
    async deleteById(id) {
        return await this.customerRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/customers'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "create", null);
__decorate([
    rest_1.get('/customers/count'),
    __param(0, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "count", null);
__decorate([
    rest_1.get('/customers'),
    __param(0, rest_1.param.query.string('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "find", null);
__decorate([
    rest_1.patch('/customers'),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Customer, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/customers/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "findById", null);
__decorate([
    rest_1.patch('/customers/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateById", null);
__decorate([
    rest_1.del('/customers/{id}'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "deleteById", null);
CustomersController = __decorate([
    __param(0, repository_1.repository(repositories_1.CustomerRepository)),
    __metadata("design:paramtypes", [repositories_1.CustomerRepository])
], CustomersController);
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map