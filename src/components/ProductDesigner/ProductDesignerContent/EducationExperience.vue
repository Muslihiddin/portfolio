<script>
export default {
    name: 'Education Experience'
}
</script>

<template>
    <div class="both">
        <div class="education">
            <h4><span class="material-icons">school</span>Education</h4>
            <ul>
                <li>
                    <div class="content">
                        <div class="first-block">
                            <h5>Stanford University</h5>
                            <span>MSc (Human Computer Interaction)</span>
                        </div>
                        <div class="second-block">
                            <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6707 3.80625L1.70509 12.7719L0.232178 11.299L9.19675 2.33333H1.29572V0.25H12.754V11.7083H10.6707V3.80625Z" fill="black"/>
                            </svg>
                            <p>• 2013-2015</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <div class="first-block">
                            <h5>MIT Summer School</h5>
                            <span>UX Training Bootcamp</span>
                        </div>
                        <div class="second-block">
                            <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6707 3.80625L1.70509 12.7719L0.232178 11.299L9.19675 2.33333H1.29572V0.25H12.754V11.7083H10.6707V3.80625Z" fill="black"/>
                            </svg>
                            <p>• 2013-2014</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <div class="first-block">
                            <h5>California State University</h5>
                            <span>BSc in Software Engineering</span>
                        </div>
                        <div class="second-block">
                            <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6707 3.80625L1.70509 12.7719L0.232178 11.299L9.19675 2.33333H1.29572V0.25H12.754V11.7083H10.6707V3.80625Z" fill="black"/>
                            </svg>
                            <p>• 2009-2012</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="experience">
            <h4><span class="material-icons">work</span>Work Experience</h4>
            <ul>
                <li>
                    <div class="icon">
                        <img src="@/assets/icon/work_experience/Rocket.png" alt="Lil Rocket <3">
                    </div>
                    <div class="content">
                        <div class="first-block">
                            <h5>SpaceFleet</h5>
                            <span>Senior Product Designer</span>
                        </div>
                        <div class="second-block">
                            <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6707 3.80625L1.70509 12.7719L0.232178 11.299L9.19675 2.33333H1.29572V0.25H12.754V11.7083H10.6707V3.80625Z" fill="black"/>
                            </svg>
                            <p>• April 2019 - Current</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="icon" id="tune">
                        <img src="@/assets/icon/work_experience/Tune.png" alt="Tune">
                    </div>
                    <div class="content">
                        <div class="first-block">
                            <h5>MusicMash</h5>
                            <span>Information Architect</span>
                        </div>
                        <div class="second-block">
                            <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6707 3.80625L1.70509 12.7719L0.232178 11.299L9.19675 2.33333H1.29572V0.25H12.754V11.7083H10.6707V3.80625Z" fill="black"/>
                            </svg>
                            <p>• April 2016 - May 2017</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="icon" id="crown">
                        <img src="@/assets/icon/work_experience/Crown.png" alt="Crown">
                    </div>
                    <div class="content">
                        <div class="first-block">
                            <h5>Kingdom</h5>
                            <span>UI Designer</span>
                        </div>
                        <div class="second-block">
                            <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6707 3.80625L1.70509 12.7719L0.232178 11.299L9.19675 2.33333H1.29572V0.25H12.754V11.7083H10.6707V3.80625Z" fill="black"/>
                            </svg>
                            <p>• April 2016 - May 2017</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .both {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 115px;
        column-gap: 50px;
        .education {
            flex-grow: 1;
        }
        .experience{
            flex-grow: 1;
        }
    }
    h4 {
        font-size: 2.25rem;
        line-height: 2.25rem;
        font-weight: 400;
        margin-block: 30px 85px;
    }
    h5 {
        font-size: 24px;
        line-height: 26px;
        margin-bottom: 10px;
    }
    span {
        font-size: 16px;
        line-height: 20px;
        color: rgba($color: #000000, $alpha: 0.6);
    }
    p {
        font-size: 16px;
        line-height: 20px;
        color: rgba($color: #000000, $alpha: 0.6);
        padding-right: 60px;
    }
    li {
        display: flex;
        align-items: center;
        border-bottom:1px solid #E5E5E5;
    }
    .second-block {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        svg {
            margin-bottom: 22px;
        }
    }
    .content {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
    }
    .icon {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFB4E9;
        border-radius: 50%;
        margin-right: 20px;
    }
    #tune {
        background-color: #A5BEFF;
    }
    #crown {
        background-color: #FFC960;
    }

    .material-icons {
        position: relative;
        top: 10px;
        font-size: 45px;
        color: #000;
        margin-right: 15px;
    }

    @media screen and(max-width: 990px) {
        h4 {
            margin-block: 85px 25px;
        }
    }
</style>