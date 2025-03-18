FROM jenkins/inbound-agent:latest

USER root

# Install dependencies
RUN apt-get update && apt-get install -y \
    awscli \
    docker.io \
    git \
    unzip \
    curl \
    jq \
    openjdk-17-jdk \
    maven \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install Docker CLI
RUN curl -fsSL https://get.docker.com | sh

# Install Kubectl for Kubernetes deployments
RUN curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" \
    && chmod +x kubectl \
    && mv kubectl /usr/local/bin/

# Install Trivy for security scanning
RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh

# Install SonarQube Scanner
RUN curl -Lo sonarqube.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip \
    && unzip sonarqube.zip \
    && mv sonar-scanner-5.0.1.3006-linux /opt/sonar-scanner \
    && ln -s /opt/sonar-scanner/bin/sonar-scanner /usr/local/bin/sonar-scanner \
    && rm sonarqube.zip

# Install AWS IAM Authenticator for EKS
RUN curl -Lo aws-iam-authenticator https://amazon-eks.s3.us-west-2.amazonaws.com/1.21.2/2021-07-05/bin/linux/amd64/aws-iam-authenticator \
    && chmod +x aws-iam-authenticator \
    && mv aws-iam-authenticator /usr/local/bin/

# Set permissions for Docker
RUN chmod 666 /var/run/docker.sock

USER jenkins
