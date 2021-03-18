/*
 * Copyright (C) 2021 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default class URLToolActivator {

    decodeURLParameter(params) {
        const activeTool = params.activeTool;
        let activeTools = params.activeTools;

        if (activeTool && !activeTools) {
            activeTools = activeTool;
        }

        if (activeTools) {
            const toolIds = activeTools.split(",");
            toolIds.forEach((toolId) => {
                const tool = this._getTool(toolId);
                tool && tool.set("active", true);
            });
        }

    }

    _getTool(toolId) {
        const tools = this._tools;
        return tools.find((tool) => tool.id === toolId)
    }
}
