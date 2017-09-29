var ResourceEnum = {
    MEMORY: 0,
    CPU: 1,
    MEMORY_RESERVATION: 2,
    properties: {
        0: {name: "memory", value: 0, label: "Memory"},
        1: {name: "cpu", value: 1, label: "CPU"},
        2: {name: "memoryReservation", value: 2, label: "MemoryReservation"}
    }
};

function parseResourceType(input, defaultResourceType) {
    if (!input) {
        console.log("No resourceType provided, defaulting to default: " + defaultResourceType);
        return defaultResourceType;
    }
    if (input.toLowerCase() === ResourceEnum.properties[ResourceEnum.MEMORY].name) {
        return ResourceEnum.MEMORY;
    } else if (input.toLowerCase() === ResourceEnum.properties[ResourceEnum.CPU].name) {
        return ResourceEnum.CPU;
    } else {
        console.log("Invalid resourceType '" + input + "' provided. Defaulting to: " + defaultResourceType);
        return ResourceEnum.MEMORY;
    }
}

function resourceLabel(resourceType) {
    if (resourceType == ResourceEnum.MEMORY) {
        return ResourceEnum.properties[ResourceEnum.MEMORY].label;
    } else if (resourceType == ResourceEnum.CPU) {
        return ResourceEnum.properties[ResourceEnum.CPU].label;
    } else {
        handleError("Unknown resource type: " + resourceType);
    }
}
