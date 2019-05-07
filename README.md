# ![LOGO](logo.png) ComputeManagementClient **flow**ground Connector

## Description

A generated **flow**ground connector for the ComputeManagementClient API (version 2018-10-01).

Generated from: https://api.apis.guru/v2/specs/azure.com/compute/2018-10-01/swagger.json<br/>
Generated at: 2019-05-07T17:37:50+03:00

## API Description

The Compute Management Client.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Gets a list of compute operations.

*Tags:* `ComputeOperations`

#### Input Parameters
* `api-version` - _required_ - Client Api Version.

### Lists all availability sets in a subscription.

*Tags:* `AvailabilitySets`

#### Input Parameters
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets the list of Images in the subscription. Use nextLink property in the response to get the next page of Images. Do this till nextLink is null to fetch all the Images.

*Tags:* `Images`

#### Input Parameters
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Export logs that show Api requests made by this subscription in the given time window to show throttling activities.

*Tags:* `LogAnalytics`

#### Input Parameters
* `location` - _required_ - The location upon which virtual-machine-sizes is queried.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Export logs that show total throttled Api requests for this subscription in the given time window.

*Tags:* `LogAnalytics`

#### Input Parameters
* `location` - _required_ - The location upon which virtual-machine-sizes is queried.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of virtual machine image publishers for the specified Azure location.

*Tags:* `VirtualMachineImages`

#### Input Parameters
* `location` - _required_ - The name of a supported Azure region.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of virtual machine extension image types.

*Tags:* `VirtualMachineExtensionImages`

#### Input Parameters
* `location` - _required_ - The name of a supported Azure region.
* `publisherName` - _required_
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of virtual machine extension image versions.

*Tags:* `VirtualMachineExtensionImages`

#### Input Parameters
* `location` - _required_ - The name of a supported Azure region.
* `publisherName` - _required_
* `type` - _required_
* `$filter` - _optional_ - The filter to apply on the operation.
* `$top` - _optional_
* `$orderby` - _optional_
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a virtual machine extension image.

*Tags:* `VirtualMachineExtensionImages`

#### Input Parameters
* `location` - _required_ - The name of a supported Azure region.
* `publisherName` - _required_
* `type` - _required_
* `version` - _required_
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of virtual machine image offers for the specified location and publisher.

*Tags:* `VirtualMachineImages`

#### Input Parameters
* `location` - _required_ - The name of a supported Azure region.
* `publisherName` - _required_ - A valid image publisher.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.

*Tags:* `VirtualMachineImages`

#### Input Parameters
* `location` - _required_ - The name of a supported Azure region.
* `publisherName` - _required_ - A valid image publisher.
* `offer` - _required_ - A valid image publisher offer.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of all virtual machine image versions for the specified location, publisher, offer, and SKU.

*Tags:* `VirtualMachineImages`

#### Input Parameters
* `location` - _required_ - The name of a supported Azure region.
* `publisherName` - _required_ - A valid image publisher.
* `offer` - _required_ - A valid image publisher offer.
* `skus` - _required_ - A valid image SKU.
* `$filter` - _optional_ - The filter to apply on the operation.
* `$top` - _optional_
* `$orderby` - _optional_
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a virtual machine image.

*Tags:* `VirtualMachineImages`

#### Input Parameters
* `location` - _required_ - The name of a supported Azure region.
* `publisherName` - _required_ - A valid image publisher.
* `offer` - _required_ - A valid image publisher offer.
* `skus` - _required_ - A valid image SKU.
* `version` - _required_ - A valid image SKU version.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets, for the specified location, the current compute resource usage information as well as the limits for compute resources under the subscription.

*Tags:* `Usage`

#### Input Parameters
* `location` - _required_ - The location for which resource usage is queried.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets all the virtual machines under the specified subscription for the specified location.

*Tags:* `VirtualMachines`

#### Input Parameters
* `location` - _required_ - The location for which virtual machines under the subscription are queried.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### This API is deprecated. Use [Resources Skus](https://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)

*Tags:* `VirtualMachineSizes`

#### Input Parameters
* `location` - _required_ - The location upon which virtual-machine-sizes is queried.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is null to fetch all the VM Scale Sets.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Lists all of the virtual machines in the specified subscription. Use the nextLink property in the response to get the next page of virtual machines.

*Tags:* `VirtualMachines`

#### Input Parameters
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Lists all availability sets in a resource group.

*Tags:* `AvailabilitySets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Delete an availability set.

*Tags:* `AvailabilitySets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `availabilitySetName` - _required_ - The name of the availability set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Retrieves information about an availability set.

*Tags:* `AvailabilitySets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `availabilitySetName` - _required_ - The name of the availability set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Update an availability set.

*Tags:* `AvailabilitySets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `availabilitySetName` - _required_ - The name of the availability set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Create or update an availability set.

*Tags:* `AvailabilitySets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `availabilitySetName` - _required_ - The name of the availability set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Lists all available virtual machine sizes that can be used to create a new virtual machine in an existing availability set.

*Tags:* `AvailabilitySets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `availabilitySetName` - _required_ - The name of the availability set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets the list of images under a resource group.

*Tags:* `Images`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Deletes an Image.

*Tags:* `Images`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `imageName` - _required_ - The name of the image.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets an image.

*Tags:* `Images`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `imageName` - _required_ - The name of the image.
* `$expand` - _optional_ - The expand expression to apply on the operation.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Update an image.

*Tags:* `Images`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `imageName` - _required_ - The name of the image.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Create or update an image.

*Tags:* `Images`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `imageName` - _required_ - The name of the image.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of all VM scale sets under a resource group.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of all virtual machines in a VM scale sets.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `virtualMachineScaleSetName` - _required_ - The name of the VM scale set.
* `$filter` - _optional_ - The filter to apply to the operation.
* `$select` - _optional_ - The list parameters.
* `$expand` - _optional_ - The expand expression to apply to the operation.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Deletes a VM scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Display information about a virtual machine scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Update a VM scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set to create or update.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Create or update a VM scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set to create or update.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and releases the compute resources. You are not billed for the compute resources that this virtual machine scale set deallocates.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Deletes virtual machines in a VM scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the latest available extension version. Instances which are already running the latest extension versions are not affected.

*Tags:* `VirtualMachineScaleSetRollingUpgrades`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of all extensions in a VM scale set.

*Tags:* `VirtualMachineScaleSetExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set containing the extension.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to delete the extension.

*Tags:* `VirtualMachineScaleSetExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set where the extension should be deleted.
* `vmssExtensionName` - _required_ - The name of the VM scale set extension.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to get the extension.

*Tags:* `VirtualMachineScaleSetExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set containing the extension.
* `vmssExtensionName` - _required_ - The name of the VM scale set extension.
* `$expand` - _optional_ - The expand expression to apply on the operation.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to create or update an extension.

*Tags:* `VirtualMachineScaleSetExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set where the extension should be create or updated.
* `vmssExtensionName` - _required_ - The name of the VM scale set extension.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Manual platform update domain walk to update virtual machines in a service fabric virtual machine scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `platformUpdateDomain` - _required_ - The platform update domain for which a manual recovery walk is requested

### Gets the status of a VM scale set instance.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.

*Tags:* `VirtualMachineScaleSetRollingUpgrades`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets list of OS upgrades on a VM scale set instance.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which are not eligible for perform maintenance will be failed. Please refer to best practices for more details: https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redeploy one or more virtual machines in a VM scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is reset to initial state.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This operation is only supported for managed disks.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Restarts one or more virtual machines in a VM scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Cancels the current virtual machine scale set rolling upgrade.

*Tags:* `VirtualMachineScaleSetRollingUpgrades`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets the status of the latest virtual machine scale set rolling upgrade.

*Tags:* `VirtualMachineScaleSetRollingUpgrades`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Starts one or more virtual machines in a VM scale set.

*Tags:* `VirtualMachineScaleSets`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Deletes a virtual machine from a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets a virtual machine from a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Updates a virtual machine of a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set where the extension should be create or updated.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and releases the compute resources it uses. You are not billed for the compute resources of this virtual machine once it is deallocated.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gets the status of a virtual machine from a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Performs maintenance on a virtual machine in a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Redeploys a virtual machine in a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance. This operation is only supported for managed disks.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Restarts a virtual machine in a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Starts a virtual machine in a VM scale set.

*Tags:* `VirtualMachineScaleSetVMs`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmScaleSetName` - _required_ - The name of the VM scale set.
* `instanceId` - _required_ - The instance ID of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Lists all of the virtual machines in the specified resource group. Use the nextLink property in the response to get the next page of virtual machines.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to delete a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Retrieves information about the model view or the instance view of a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `$expand` - _optional_ - The expand expression to apply on the operation.
    Possible values: instanceView.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to update a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to create or update a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to create similar VMs.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Converts virtual machine disks from blob-based to managed disks. Virtual machine must be stop-deallocated before invoking this operation.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Shuts down the virtual machine and releases the compute resources. You are not billed for the compute resources that this virtual machine uses.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to get all extensions of a Virtual Machine.

*Tags:* `VirtualMachineExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine containing the extension.
* `$expand` - _optional_ - The expand expression to apply on the operation.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to delete the extension.

*Tags:* `VirtualMachineExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine where the extension should be deleted.
* `vmExtensionName` - _required_ - The name of the virtual machine extension.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to get the extension.

*Tags:* `VirtualMachineExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine containing the extension.
* `vmExtensionName` - _required_ - The name of the virtual machine extension.
* `$expand` - _optional_ - The expand expression to apply on the operation.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to update the extension.

*Tags:* `VirtualMachineExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine where the extension should be updated.
* `vmExtensionName` - _required_ - The name of the virtual machine extension.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to create or update the extension.

*Tags:* `VirtualMachineExtensions`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine where the extension should be created or updated.
* `vmExtensionName` - _required_ - The name of the virtual machine extension.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Sets the state of the virtual machine to generalized.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Retrieves information about the run-time state of a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to perform maintenance on a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the same provisioned resources. You are still charged for this virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to redeploy a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Reimages the virtual machine which has an ephemeral OS disk back to its initial state.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to restart a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### The operation to start a virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Lists all available virtual machine sizes to which the specified virtual machine can be resized.

*Tags:* `VirtualMachines`

#### Input Parameters
* `resourceGroupName` - _required_ - The name of the resource group.
* `vmName` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client Api Version.
* `subscriptionId` - _required_ - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

## License

**flow**ground :- Telekom iPaaS / azure-com-compute-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
