import "./adminBulletin.css"

export default function BulletinBack(){
    return <div class="notice-board">
                <h2>编辑公告</h2>
                <form>
                    <div class="form-group">
                        <label for="date">日期:</label>
                        <input type="date" id="date" name="date" required/>
                    </div>
                    <div class="form-group">
                        <label for="title">标题:</label>
                        <input type="text" name="title" required/>
                    </div>
                    <div class="form-group">
                        <label for="content">内容:</label>
                        <div class="notice-content" contenteditable="true">
                            编辑此处的公告内容...
                        </div>
                    </div>
                    <div class="form-group file-input">
                        <label for="file">上传文件:</label>
                        <input type="file" id="file" name="file"/>
                    </div>
                    <button type="button" class="submit-button" onclick="submitNotice()">提交</button>
                    <button type="button" class="showGG-button" onclick="showAllAnnouncements()">显示全部公告</button>

                    <ul id="announcements-list"></ul>
                </form>
            </div>
}