/**
 * Auto-generated action file for "ComputeManagementClient (compute)" API.
 *
 * Generated at: 2019-06-11T15:13:48.432Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-compute-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'VirtualMachineScaleSetVMs_Update'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "resourceGroupName",
    "vmScaleSetName",
    "instanceId",
    "api-version",
    "subscriptionId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "resourceGroupName": "resourceGroupName",
    "vmScaleSetName": "vmScaleSetName",
    "instanceId": "instanceId",
    "api_version": "api-version",
    "subscriptionId": "subscriptionId",
    "name": "name",
    "product": "product",
    "promotionCode": "promotionCode",
    "publisher": "publisher",
    "plan": "plan",
    "ultraSSDEnabled": "ultraSSDEnabled",
    "additionalCapabilities": "additionalCapabilities",
    "id": "id",
    "availabilitySet": "availabilitySet",
    "enabled": "enabled",
    "storageUri": "storageUri",
    "bootDiagnostics": "bootDiagnostics",
    "diagnosticsProfile": "diagnosticsProfile",
    "vmSize": "vmSize",
    "hardwareProfile": "hardwareProfile",
    "consoleScreenshotBlobUri": "consoleScreenshotBlobUri",
    "serialConsoleLogBlobUri": "serialConsoleLogBlobUri",
    "code": "code",
    "displayStatus": "displayStatus",
    "level": "level",
    "message": "message",
    "time": "time",
    "status": "status",
    "disks": "disks",
    "extensions": "extensions",
    "isCustomerInitiatedMaintenanceAllowed": "isCustomerInitiatedMaintenanceAllowed",
    "lastOperationMessage": "lastOperationMessage",
    "lastOperationResultCode": "lastOperationResultCode",
    "maintenanceWindowEndTime": "maintenanceWindowEndTime",
    "maintenanceWindowStartTime": "maintenanceWindowStartTime",
    "preMaintenanceWindowEndTime": "preMaintenanceWindowEndTime",
    "preMaintenanceWindowStartTime": "preMaintenanceWindowStartTime",
    "maintenanceRedeployStatus": "maintenanceRedeployStatus",
    "placementGroupId": "placementGroupId",
    "platformFaultDomain": "platformFaultDomain",
    "platformUpdateDomain": "platformUpdateDomain",
    "rdpThumbPrint": "rdpThumbPrint",
    "statuses": "statuses",
    "extensionHandlers": "extensionHandlers",
    "vmAgentVersion": "vmAgentVersion",
    "vmAgent": "vmAgent",
    "vmHealth": "vmHealth",
    "instanceView": "instanceView",
    "latestModelApplied": "latestModelApplied",
    "licenseType": "licenseType",
    "networkInterfaces": "networkInterfaces",
    "networkProfile": "networkProfile",
    "adminPassword": "adminPassword",
    "adminUsername": "adminUsername",
    "allowExtensionOperations": "allowExtensionOperations",
    "computerName": "computerName",
    "customData": "customData",
    "disablePasswordAuthentication": "disablePasswordAuthentication",
    "provisionVMAgent": "provisionVMAgent",
    "publicKeys": "publicKeys",
    "ssh": "ssh",
    "linuxConfiguration": "linuxConfiguration",
    "secrets": "secrets",
    "additionalUnattendContent": "additionalUnattendContent",
    "enableAutomaticUpdates": "enableAutomaticUpdates",
    "timeZone": "timeZone",
    "listeners": "listeners",
    "winRM": "winRM",
    "windowsConfiguration": "windowsConfiguration",
    "osProfile": "osProfile",
    "protectFromScaleIn": "protectFromScaleIn",
    "provisioningState": "provisioningState",
    "dataDisks": "dataDisks",
    "offer": "offer",
    "sku": "sku",
    "version": "version",
    "imageReference": "imageReference",
    "caching": "caching",
    "createOption": "createOption",
    "option": "option",
    "diffDiskSettings": "diffDiskSettings",
    "diskSizeGB": "diskSizeGB",
    "secretUrl": "secretUrl",
    "sourceVault": "sourceVault",
    "diskEncryptionKey": "diskEncryptionKey",
    "keyUrl": "keyUrl",
    "keyEncryptionKey": "keyEncryptionKey",
    "encryptionSettings": "encryptionSettings",
    "uri": "uri",
    "image": "image",
    "storageAccountType": "storageAccountType",
    "managedDisk": "managedDisk",
    "osType": "osType",
    "vhd": "vhd",
    "writeAcceleratorEnabled": "writeAcceleratorEnabled",
    "osDisk": "osDisk",
    "storageProfile": "storageProfile",
    "vmId": "vmId",
    "properties": "properties",
    "resources": "resources",
    "capacity": "capacity",
    "tier": "tier",
    "zones": "zones",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['auth_azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'VirtualMachineScaleSetVMs_Update',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}