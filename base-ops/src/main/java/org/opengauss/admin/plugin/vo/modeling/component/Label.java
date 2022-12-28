/**
 Copyright  (c) 2020 Huawei Technologies Co.,Ltd.
 Copyright  (c) 2021 openGauss Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
package org.opengauss.admin.plugin.vo.modeling.component;
/**
 * @author LZW
 * @date 2022/10/29 22:38
 **/
public class Label {

    private String position;
    private int fontSize;
    private boolean show;

    public Label setPosition(String position) {
        this.position = position;
        return this;
    }
    public String getPosition() {
        return position;
    }

    public Label setFontSize(int fontSize) {
        this.fontSize = fontSize;
        return this;
    }
    public int getFontSize() {
        return fontSize == 0 ? 10 : fontSize;
    }

    public Label setShow(boolean show) {
        this.show = show;
        return this;
    }
    public boolean getShow() {
        return show;
    }
}
